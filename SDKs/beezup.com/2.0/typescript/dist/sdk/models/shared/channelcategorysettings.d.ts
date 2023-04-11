import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelCategorySettings extends SpeakeasyBase {
    /**
     * Indicates if the category mapping is required on category path leaf or not
     */
    mappingLeafRequired?: boolean;
    /**
     * Indicates if the category mapping is required, otherwise you can map the categories but it will not block the publication of your catalog
     */
    mappingRequired?: boolean;
}
