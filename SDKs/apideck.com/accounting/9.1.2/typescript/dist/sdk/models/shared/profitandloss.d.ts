import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProfitAndLossExpenses extends SpeakeasyBase {
    records: any[];
    /**
     * Total expense
     */
    total: number;
}
export declare class ProfitAndLossGrossProfit extends SpeakeasyBase {
    records: any[];
    /**
     * Total gross profit
     */
    total: number;
}
export declare class ProfitAndLossIncome extends SpeakeasyBase {
    records: any[];
    /**
     * Total income
     */
    total: number;
}
export declare class ProfitAndLossNetIncome extends SpeakeasyBase {
    records: any[];
    /**
     * Total net income
     */
    total: number;
}
export declare class ProfitAndLossNetOperatingIncome extends SpeakeasyBase {
    records: any[];
    /**
     * Total net operating income
     */
    total: number;
}
export declare class ProfitAndLoss extends SpeakeasyBase {
    currency: string;
    /**
     * Customer id
     */
    customerId?: string;
    /**
     * The start date of the report
     */
    endDate?: string;
    expenses: ProfitAndLossExpenses;
    grossProfit?: ProfitAndLossGrossProfit;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    income: ProfitAndLossIncome;
    netIncome?: ProfitAndLossNetIncome;
    netOperatingIncome?: ProfitAndLossNetOperatingIncome;
    /**
     * The name of the report
     */
    reportName: string;
    /**
     * The start date of the report
     */
    startDate?: string;
}
