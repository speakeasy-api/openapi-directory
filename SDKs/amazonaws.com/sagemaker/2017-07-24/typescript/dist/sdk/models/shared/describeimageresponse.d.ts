import { SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";
/**
 * Success
 */
export declare class DescribeImageResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    displayName?: string;
    failureReason?: string;
    imageArn?: string;
    imageName?: string;
    imageStatus?: ImageStatusEnum;
    lastModifiedTime?: Date;
    roleArn?: string;
}
