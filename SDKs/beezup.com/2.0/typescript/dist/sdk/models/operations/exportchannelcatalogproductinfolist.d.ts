import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportChannelCatalogProductInfoListPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ExportChannelCatalogProductInfoListQueryParams extends SpeakeasyBase {
    format: shared.ExportFormatInQueryGeneralParameterEnum;
}
export declare class ExportChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    pathParams: ExportChannelCatalogProductInfoListPathParams;
    queryParams: ExportChannelCatalogProductInfoListQueryParams;
    request: shared.GetChannelCatalogProductInfoListRequest;
}
export declare class ExportChannelCatalogProductInfoListResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    beezUPCommonLink3?: shared.BeezUpCommonLink3;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
