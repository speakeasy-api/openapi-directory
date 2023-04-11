import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceDeletionStatusEnum } from "./namespacedeletionstatusenum";
import { NamespaceDeletionStatusErrorCodesEnum } from "./namespacedeletionstatuserrorcodesenum";
/**
 * Success
 */
export declare class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
    errorCode?: NamespaceDeletionStatusErrorCodesEnum;
    errorMessage?: string;
    namespaceArn?: string;
    namespaceName?: string;
    status?: NamespaceDeletionStatusEnum;
}
