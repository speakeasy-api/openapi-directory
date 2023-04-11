import { SpeakeasyBase } from "../../../internal/utils";
export declare class BalanceSheetAssetsCurrentAssetsAccounts extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the current asset account
     */
    name?: string;
    /**
     * The value of the current asset
     */
    value?: number;
}
export declare class BalanceSheetAssetsCurrentAssets extends SpeakeasyBase {
    accounts: BalanceSheetAssetsCurrentAssetsAccounts[];
    /**
     * Total current assets
     */
    total: number;
}
export declare class BalanceSheetAssetsFixedAssetsAccounts extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the fixed asset account
     */
    name?: string;
    /**
     * The value of the fixed asset
     */
    value?: number;
}
export declare class BalanceSheetAssetsFixedAssets extends SpeakeasyBase {
    accounts: BalanceSheetAssetsFixedAssetsAccounts[];
    /**
     * Total fixed assets
     */
    total: number;
}
export declare class BalanceSheetAssets extends SpeakeasyBase {
    currentAssets: BalanceSheetAssetsCurrentAssets;
    fixedAssets: BalanceSheetAssetsFixedAssets;
    /**
     * Total assets
     */
    total: number;
}
export declare class BalanceSheetEquityItems extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The type of the equity
     */
    name?: string;
    /**
     * The equity amount
     */
    value?: number;
}
export declare class BalanceSheetEquity extends SpeakeasyBase {
    items: BalanceSheetEquityItems[];
    /**
     * Total equity
     */
    total: number;
}
export declare class BalanceSheetLiabilitiesAccounts extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the liability account
     */
    name?: string;
    /**
     * The value of the liability
     */
    value?: number;
}
export declare class BalanceSheetLiabilities extends SpeakeasyBase {
    accounts: BalanceSheetLiabilitiesAccounts[];
    /**
     * Total liabilities
     */
    total: number;
}
export declare class BalanceSheet extends SpeakeasyBase {
    assets: BalanceSheetAssets;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * The start date of the report
     */
    endDate?: string;
    equity: BalanceSheetEquity;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    liabilities: BalanceSheetLiabilities;
    /**
     * The name of the report
     */
    reportName: string;
    /**
     * The start date of the report
     */
    startDate: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
