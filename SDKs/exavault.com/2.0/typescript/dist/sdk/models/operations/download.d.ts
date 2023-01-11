import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadQueryParams extends SpeakeasyBase {
    downloadArchiveName?: string;
    resources: string[];
}
export declare class DownloadHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DownloadRequest extends SpeakeasyBase {
    queryParams: DownloadQueryParams;
    headers: DownloadHeaders;
}
export declare class DownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    download200ApplicationOctetStreamBinaryString?: Uint8Array;
    download200ApplicationZipBinaryString?: Uint8Array;
}
