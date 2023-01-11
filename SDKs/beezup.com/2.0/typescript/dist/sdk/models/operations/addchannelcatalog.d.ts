import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddChannelCatalogRequest extends SpeakeasyBase {
    request: shared.AddChannelCatalogRequest;
}
export declare class AddChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    linksGetChannelCatalogLink?: shared.LinksGetChannelCatalogLink;
}
