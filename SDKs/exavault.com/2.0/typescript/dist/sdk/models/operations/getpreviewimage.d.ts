import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPreviewImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare class GetPreviewImageQueryParams extends SpeakeasyBase {
    height?: number;
    page?: number;
    resource: string;
    size: GetPreviewImageSizeEnum;
    width?: number;
}
export declare class GetPreviewImageHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetPreviewImageRequest extends SpeakeasyBase {
    queryParams: GetPreviewImageQueryParams;
    headers: GetPreviewImageHeaders;
}
export declare class GetPreviewImageResponse extends SpeakeasyBase {
    contentType: string;
    previewFileResponse?: shared.PreviewFileResponse;
    statusCode: number;
}
