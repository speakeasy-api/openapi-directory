import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about an instance of an AWS resource associated with a project.
 */
export declare class Resource extends SpeakeasyBase {
    /**
     *  AWS resource name which uniquely identifies the resource in AWS systems.
     */
    arn?: string;
    /**
     *  Key-value attribute pairs.
     */
    attributes?: Record<string, string>;
    /**
     *  Identifies which feature in AWS Mobile Hub is associated with this AWS resource.
     */
    feature?: string;
    /**
     *  Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket).
     */
    name?: string;
    /**
     *  Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket).
     */
    type?: string;
}
