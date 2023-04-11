import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInsightRuleReportInput extends SpeakeasyBase {
    endTime: Date;
    maxContributorCount?: number;
    metrics?: string[];
    orderBy?: string;
    period: number;
    ruleName: string;
    startTime: Date;
}
