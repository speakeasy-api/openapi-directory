import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel extends SpeakeasyBase {
    apiAccountId?: number;
    apiAccountName?: string;
    custom?: Record<string, any>;
    exportFactor?: number;
    id?: number;
    source: string;
    sourceId: string;
    stockSyncInactive?: boolean;
    stockSyncMax?: number;
    stockSyncMin?: number;
    unitsPerItem?: number;
}
