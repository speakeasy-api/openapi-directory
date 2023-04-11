import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyUsageLimitActionEnum {
    ModifyUsageLimit = "ModifyUsageLimit"
}
/**
 * The new action that Amazon Redshift takes when the limit is reached. For more information about this parameter, see <a>UsageLimit</a>.
 */
export declare enum GETModifyUsageLimitBreachActionEnum {
    Log = "log",
    EmitMetric = "emit-metric",
    Disable = "disable"
}
export declare enum GETModifyUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyUsageLimitRequest extends SpeakeasyBase {
    action: GETModifyUsageLimitActionEnum;
    /**
     * The new limit amount. For more information about this parameter, see <a>UsageLimit</a>.
     */
    amount?: number;
    /**
     * The new action that Amazon Redshift takes when the limit is reached. For more information about this parameter, see <a>UsageLimit</a>.
     */
    breachAction?: GETModifyUsageLimitBreachActionEnum;
    /**
     * The identifier of the usage limit to modify.
     */
    usageLimitId: string;
    version: GETModifyUsageLimitVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
