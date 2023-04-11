import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationType } from "./classificationtype";
/**
 * (Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action.
 */
export declare class S3ResourceClassification extends SpeakeasyBase {
    bucketName: string;
    classificationType: ClassificationType;
    prefix?: string;
}
