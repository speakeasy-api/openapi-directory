import { SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupCostReportElement } from "./billinggroupcostreportelement";
/**
 * Success
 */
export declare class ListBillingGroupCostReportsOutput extends SpeakeasyBase {
    billingGroupCostReports?: BillingGroupCostReportElement[];
    nextToken?: string;
}
