import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoiceSummaryByUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


// GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments
/** 
 * A summary of the credits and adjustments contributing to the invoice.
**/
export class GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetInvoiceSummaryByUuid200ApplicationJsonOverages
/** 
 * A summary of the overages contributing to the invoice.
**/
export class GetInvoiceSummaryByUuid200ApplicationJsonOverages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetInvoiceSummaryByUuid200ApplicationJsonProductCharges
/** 
 * A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.
**/
export class GetInvoiceSummaryByUuid200ApplicationJsonProductCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems })
  items?: GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetInvoiceSummaryByUuid200ApplicationJsonTaxes
/** 
 * A summary of the taxes contributing to the invoice.
**/
export class GetInvoiceSummaryByUuid200ApplicationJsonTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress
/** 
 * The billing address of the customer being invoiced.
**/
export class GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country_iso2_code" })
  countryIso2Code?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=billing_period" })
  billingPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=credits_and_adjustments" })
  creditsAndAdjustments?: GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments;

  @SpeakeasyMetadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=overages" })
  overages?: GetInvoiceSummaryByUuid200ApplicationJsonOverages;

  @SpeakeasyMetadata({ data: "json, name=product_charges" })
  productCharges?: GetInvoiceSummaryByUuid200ApplicationJsonProductCharges;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: GetInvoiceSummaryByUuid200ApplicationJsonTaxes;

  @SpeakeasyMetadata({ data: "json, name=user_billing_address" })
  userBillingAddress?: GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=user_company" })
  userCompany?: string;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}


export class GetInvoiceSummaryByUuid401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoiceSummaryByUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceSummaryByUuidPathParams;
}


export class GetInvoiceSummaryByUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvoiceSummaryByUuid200ApplicationJSONObject?: GetInvoiceSummaryByUuid200ApplicationJson;

  @SpeakeasyMetadata()
  getInvoiceSummaryByUuid401ApplicationJSONObject?: GetInvoiceSummaryByUuid401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
