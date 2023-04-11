import { SpeakeasyBase } from "../../../internal/utils";
import { FileInfo } from "./fileinfo";
import { OrderLineItems } from "./orderlineitems";
import { TrackingInfo } from "./trackinginfo";
/**
 * This type is used by the <strong>evidence</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are associated with the payment dispute.
 */
export declare class DisputeEvidence extends SpeakeasyBase {
    /**
     * Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set.
     */
    evidenceId?: string;
    /**
     * This enumeration value shows the type of evidential file provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>
     */
    evidenceType?: string;
    /**
     * This array shows the name, ID, file type, and upload date for each provided file.
     */
    files?: FileInfo[];
    /**
     * This array shows one or more order line items associated with the evidential document that has been provided.
     */
    lineItems?: OrderLineItems[];
    /**
     * The timestamp in this field shows the date/time when the seller provided a requested evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
     */
    providedDate?: string;
    /**
     * The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
     */
    requestDate?: string;
    /**
     * The timestamp in this field shows the date/time when the seller was expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
     */
    respondByDate?: string;
    /**
     * This array shows the shipping carrier and shipment tracking number associated with each shipment package of the order. This array is returned if the seller has provided shipment tracking information as evidence to support <code>PROOF_OF_DELIVERY</code>.
     */
    shipmentTracking?: TrackingInfo[];
}
