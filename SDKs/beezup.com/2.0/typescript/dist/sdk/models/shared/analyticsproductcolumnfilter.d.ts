import { SpeakeasyBase } from "../../../internal/utils";
export declare class AnalyticsProductColumnFilter extends SpeakeasyBase {
    /**
     * Indicate the operator you want to apply on the columnId
     */
    operatorName: string;
    /**
     * Must be null if the operator is "IsNull" or "IsNotNull".
     *
     * @remarks
     * Can contains multiple value in case of "InList" operator. Otherwise a single value is expected.
     *
     */
    values?: string[];
}
