import { SpeakeasyBase } from "../../../internal/utils";
import { AccessAdvisorUsageGranularityTypeEnum } from "./accessadvisorusagegranularitytypeenum";
export declare class GenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    arn: string;
    granularity?: AccessAdvisorUsageGranularityTypeEnum;
}
