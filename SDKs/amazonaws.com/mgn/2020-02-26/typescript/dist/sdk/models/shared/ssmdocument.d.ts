import { SpeakeasyBase } from "../../../internal/utils";
import { SsmExternalParameter } from "./ssmexternalparameter";
import { SsmParameterStoreParameter } from "./ssmparameterstoreparameter";
/**
 * AWS Systems Manager Document.
 */
export declare class SsmDocument extends SpeakeasyBase {
    actionName: string;
    externalParameters?: Record<string, SsmExternalParameter>;
    mustSucceedForCutover?: boolean;
    parameters?: Record<string, SsmParameterStoreParameter[]>;
    ssmDocumentName: string;
    timeoutSeconds?: number;
}
