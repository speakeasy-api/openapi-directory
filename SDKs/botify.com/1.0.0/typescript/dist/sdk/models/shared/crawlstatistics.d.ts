import { SpeakeasyBase } from "../../../internal/utils";
export declare class CrawlStatistics extends SpeakeasyBase {
    depthCurrent: number;
    lastUpdDt: Date;
    pagesDones: number;
    pagesDones2xx: number;
    pagesDones3xx: number;
    pagesDones4xx: number;
    pagesDones5xx: number;
    pagesDonesNetworkerror: number;
    pagesDonesXxx: number;
    pagesKnown: number;
}
