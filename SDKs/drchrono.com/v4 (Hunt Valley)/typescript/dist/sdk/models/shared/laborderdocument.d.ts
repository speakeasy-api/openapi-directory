import { SpeakeasyBase } from "../../../internal/utils";
/**
 *
 * @remarks
 * Value | Notes
 * ----- | -----
 * `"REQ"` | requisition form                                              |
 * `"ABN"` | `ABN (Advance Beneficiary Notice)`                            |
 * `"R-A"` | requisition form and :abbr:`ABN (Advance Beneficiary Notice)` |
 * `"RES"` | lab results                                                   |
 *
 */
export declare enum LabOrderDocumentTypeEnum {
    Req = "REQ",
    Abn = "ABN",
    RA = "R-A",
    Res = "RES"
}
/**
 * Created
 */
export declare class LabOrderDocument extends SpeakeasyBase {
    document: string;
    id?: number;
    /**
     * ID of the order this document is associated with
     */
    labOrder: number;
    /**
     * Time at which the document was uploaded
     */
    timestamp?: string;
    /**
     *
     * @remarks
     * Value | Notes
     * ----- | -----
     * `"REQ"` | requisition form                                              |
     * `"ABN"` | `ABN (Advance Beneficiary Notice)`                            |
     * `"R-A"` | requisition form and :abbr:`ABN (Advance Beneficiary Notice)` |
     * `"RES"` | lab results                                                   |
     *
     */
    type: LabOrderDocumentTypeEnum;
}
