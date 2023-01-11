import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class GetArtifactRuleConfigPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    rule: GetArtifactRuleConfigRuleEnum;
}
export declare class GetArtifactRuleConfigRequest extends SpeakeasyBase {
    pathParams: GetArtifactRuleConfigPathParams;
}
export declare class GetArtifactRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    rule?: shared.Rule;
    statusCode: number;
}
