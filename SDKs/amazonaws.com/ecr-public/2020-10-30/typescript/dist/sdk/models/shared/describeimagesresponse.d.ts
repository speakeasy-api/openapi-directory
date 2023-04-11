import { SpeakeasyBase } from "../../../internal/utils";
import { ImageDetail } from "./imagedetail";
/**
 * Success
 */
export declare class DescribeImagesResponse extends SpeakeasyBase {
    imageDetails?: ImageDetail[];
    nextToken?: string;
}
