import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LabOrderDocumentTypeEnum {
    Req = "REQ",
    Abn = "ABN",
    RA = "R-A",
    Res = "RES"
}
export declare class LabOrderDocument extends SpeakeasyBase {
    document: string;
    id?: number;
    labOrder: number;
    timestamp?: string;
    type: LabOrderDocumentTypeEnum;
}
