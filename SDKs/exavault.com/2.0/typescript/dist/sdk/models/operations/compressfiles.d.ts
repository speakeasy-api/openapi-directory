import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompressFilesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class CompressFilesCompressFilesRequestBody extends SpeakeasyBase {
    archiveName?: string;
    parentResource?: string;
    resources: string[];
}
export declare class CompressFilesRequest extends SpeakeasyBase {
    headers: CompressFilesHeaders;
    request?: CompressFilesCompressFilesRequestBody;
}
export declare class CompressFilesResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
