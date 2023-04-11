import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for TagApiDeploymentRevision.
 */
export declare class TagApiDeploymentRevisionRequest extends SpeakeasyBase {
    /**
     * Required. The name of the deployment to be tagged, including the revision ID.
     */
    name: string;
    /**
     * Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.
     */
    tag: string;
}
