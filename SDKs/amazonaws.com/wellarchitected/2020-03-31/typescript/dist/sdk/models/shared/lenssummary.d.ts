import { SpeakeasyBase } from "../../../internal/utils";
import { LensStatusEnum } from "./lensstatusenum";
import { LensTypeEnum } from "./lenstypeenum";
/**
 * A lens summary of a lens.
 */
export declare class LensSummary extends SpeakeasyBase {
    /**
     * The date and time recorded.
     */
    createdAt?: Date;
    /**
     * The description of the lens.
     */
    description?: string;
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    /**
     * The full name of the lens.
     */
    lensName?: string;
    lensStatus?: LensStatusEnum;
    lensType?: LensTypeEnum;
    lensVersion?: string;
    /**
     * An Amazon Web Services account ID.
     */
    owner?: string;
    /**
     * The date and time recorded.
     */
    updatedAt?: Date;
}
