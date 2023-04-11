import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsIdAccountingRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSONAccountingWorkbookEnum {
    Customer = "customer",
    Provider = "provider",
    Bank = "bank",
    CashWoucher = "cashWoucher",
    Fiscal = "fiscal",
    Insurance = "insurance",
    Social = "social",
    Other = "other",
    Permanent = "permanent"
}
export declare class GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSONAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSONAccountingWorkbookEnum;
    yearMonth?: string;
}
/**
 * document with accounting property
 */
export declare class GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSON extends SpeakeasyBase {
    accounting?: GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSONAccounting;
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsIdAccountingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * document with accounting property
     */
    getSpacesSpaceIdDocumentsIdAccounting200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsIdAccounting200ApplicationJSON;
}
