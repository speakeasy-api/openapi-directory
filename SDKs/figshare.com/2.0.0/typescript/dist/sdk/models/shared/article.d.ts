import { SpeakeasyBase } from "../../../internal/utils";
import { Timeline } from "./timeline";
export declare class Article extends SpeakeasyBase {
    definedType?: number;
    definedTypeName?: string;
    doi?: string;
    groupId?: number;
    handle?: string;
    id?: number;
    publishedDate?: string;
    thumb?: string;
    timeline?: Timeline;
    title?: string;
    url?: string;
    urlPrivateApi?: string;
    urlPrivateHtml?: string;
    urlPublicApi?: string;
    urlPublicHtml?: string;
}
