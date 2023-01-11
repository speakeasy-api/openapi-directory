import { SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
export declare class ShareCollectionResponse extends SpeakeasyBase {
    data?: Share[];
    included?: any[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
