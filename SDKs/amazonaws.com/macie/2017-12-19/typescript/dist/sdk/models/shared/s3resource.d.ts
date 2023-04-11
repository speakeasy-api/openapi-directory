import { SpeakeasyBase } from "../../../internal/utils";
/**
 * (Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions.
 */
export declare class S3Resource extends SpeakeasyBase {
    bucketName: string;
    prefix?: string;
}
