import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 */
export declare class StandardsControlAssociationId extends SpeakeasyBase {
    securityControlId: string;
    standardsArn: string;
}
