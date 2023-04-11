import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { ParameterDeclaration } from "./parameterdeclaration";
import { ResourceIdentifierSummary } from "./resourceidentifiersummary";
/**
 * The output for the <a>GetTemplateSummary</a> action.
 */
export declare class GetTemplateSummaryOutput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    capabilitiesReason?: string;
    declaredTransforms?: string[];
    description?: string;
    metadata?: string;
    parameters?: ParameterDeclaration[];
    resourceIdentifierSummaries?: ResourceIdentifierSummary[];
    resourceTypes?: string[];
    version?: string;
}
