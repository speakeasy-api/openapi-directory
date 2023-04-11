import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentInstance } from "./currentinstance";
import { FindingReasonCodeEnum } from "./findingreasoncodeenum";
import { ModifyRecommendationDetail } from "./modifyrecommendationdetail";
import { RightsizingTypeEnum } from "./rightsizingtypeenum";
import { TerminateRecommendationDetail } from "./terminaterecommendationdetail";
/**
 * Recommendations to rightsize resources.
 */
export declare class RightsizingRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentInstance?: CurrentInstance;
    findingReasonCodes?: FindingReasonCodeEnum[];
    modifyRecommendationDetail?: ModifyRecommendationDetail;
    rightsizingType?: RightsizingTypeEnum;
    terminateRecommendationDetail?: TerminateRecommendationDetail;
}
