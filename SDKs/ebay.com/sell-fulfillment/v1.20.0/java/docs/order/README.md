# order

### Available Operations

* [getOrder](#getorder) - Use this call to retrieve the contents of an order based on its unique identifier, <i>orderId</i>. This value was returned in the <b> getOrders</b> call's <b>orders.orderId</b> field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> object contains information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li> The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul>
* [getOrders](#getorders) - Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the <b>filter</b> parameter. You can alternatively specify a list of orders using the <b>orderIds</b> parameter. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> objects contain information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li>The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul> <br><br> <span class="tablenote"><strong>Important:</strong> In this call, the <b>cancelStatus.cancelRequests</b> array is returned but is always empty. Use the <b>getOrder</b> call instead, which returns this array fully populated with information about any cancellation requests.</span>
* [issueRefund](#issuerefund) - Issue Refund

## getOrder

Use this call to retrieve the contents of an order based on its unique identifier, <i>orderId</i>. This value was returned in the <b> getOrders</b> call's <b>orders.orderId</b> field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> object contains information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li> The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.operations.GetOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest("quibusdam") {{
                fieldGroups = "unde";
            }};            

            GetOrderResponse res = sdk.order.getOrder(req, new GetOrderSecurity("nulla") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrders

Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the <b>filter</b> parameter. You can alternatively specify a list of orders using the <b>orderIds</b> parameter. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> objects contain information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li>The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul> <br><br> <span class="tablenote"><strong>Important:</strong> In this call, the <b>cancelStatus.cancelRequests</b> array is returned but is always empty. Use the <b>getOrder</b> call instead, which returns this array fully populated with information about any cancellation requests.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersRequest;
import org.openapis.openapi.models.operations.GetOrdersResponse;
import org.openapis.openapi.models.operations.GetOrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersRequest req = new GetOrdersRequest() {{
                fieldGroups = "corrupti";
                filter = "illum";
                limit = "vel";
                offset = "error";
                orderIds = "deserunt";
            }};            

            GetOrdersResponse res = sdk.order.getOrders(req, new GetOrdersSecurity("suscipit") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderSearchPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRefund

<div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including <b>issueRefund</b>. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br> This method allows a seller to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRefundRequest;
import org.openapis.openapi.models.operations.IssueRefundResponse;
import org.openapis.openapi.models.operations.IssueRefundSecurity;
import org.openapis.openapi.models.shared.IssueRefundRequest;
import org.openapis.openapi.models.shared.LegacyReference;
import org.openapis.openapi.models.shared.RefundItem;
import org.openapis.openapi.models.shared.SimpleAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssueRefundRequest req = new IssueRefundRequest("iure") {{
                issueRefundRequest = new IssueRefundRequest() {{
                    comment = "magnam";
                    orderLevelRefundAmount = new SimpleAmount() {{
                        currency = "debitis";
                        value = "ipsa";
                    }};;
                    reasonForRefund = "delectus";
                    refundItems = new org.openapis.openapi.models.shared.RefundItem[]{{
                        add(new RefundItem() {{
                            legacyReference = new LegacyReference() {{
                                legacyItemId = "suscipit";
                                legacyTransactionId = "molestiae";
                            }};
                            lineItemId = "minus";
                            refundAmount = new SimpleAmount() {{
                                currency = "placeat";
                                value = "voluptatum";
                            }};
                        }}),
                        add(new RefundItem() {{
                            legacyReference = new LegacyReference() {{
                                legacyItemId = "iusto";
                                legacyTransactionId = "excepturi";
                            }};
                            lineItemId = "nisi";
                            refundAmount = new SimpleAmount() {{
                                currency = "recusandae";
                                value = "temporibus";
                            }};
                        }}),
                    }};
                }};;
            }};            

            IssueRefundResponse res = sdk.order.issueRefund(req, new IssueRefundSecurity("ab") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.refund != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
