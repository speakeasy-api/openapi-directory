import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful POST on TransactionsCluster resource
 */
export declare class TransactionsCluster extends SpeakeasyBase {
    createdBy?: string;
    enabled: boolean;
    id: number;
    idAccount: number;
    idCategory?: number;
    meanAmount: number;
    medianIncrement?: number;
    nextDate?: Date;
    wording: string;
}
