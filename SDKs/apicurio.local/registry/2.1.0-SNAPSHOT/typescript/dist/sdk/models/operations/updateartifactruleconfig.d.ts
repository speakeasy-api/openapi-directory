import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class UpdateArtifactRuleConfigPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    rule: UpdateArtifactRuleConfigRuleEnum;
}
export declare class UpdateArtifactRuleConfigRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactRuleConfigPathParams;
    request: shared.Rule;
}
export declare class UpdateArtifactRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    rule?: shared.Rule;
    statusCode: number;
}
