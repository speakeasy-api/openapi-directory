import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArticleEmbargoUpdaterEmbargoTypeEnum {
    Article = "article",
    File = "file"
}
export declare class ArticleEmbargoUpdater extends SpeakeasyBase {
    embargoDate: string;
    embargoOptions?: Record<string, any>[];
    embargoReason?: string;
    embargoTitle?: string;
    embargoType: ArticleEmbargoUpdaterEmbargoTypeEnum;
    isEmbargoed: boolean;
}
