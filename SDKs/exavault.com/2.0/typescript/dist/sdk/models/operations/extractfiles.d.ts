import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtractFilesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ExtractFilesExtractFilesRequestBody extends SpeakeasyBase {
    parentResource: string;
    resource: string;
}
export declare class ExtractFilesRequest extends SpeakeasyBase {
    headers: ExtractFilesHeaders;
    request?: ExtractFilesExtractFilesRequestBody;
}
export declare class ExtractFilesResponse extends SpeakeasyBase {
    contentType: string;
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
}
