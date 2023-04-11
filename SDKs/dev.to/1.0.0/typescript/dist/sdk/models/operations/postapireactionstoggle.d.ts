import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostApiReactionsToggleCategoryEnum {
    Like = "like",
    Unicorn = "unicorn",
    ExplodingHead = "exploding_head",
    RaisedHands = "raised_hands",
    Fire = "fire"
}
export declare enum PostApiReactionsToggleReactableTypeEnum {
    Comment = "Comment",
    Article = "Article",
    User = "User"
}
export declare class PostApiReactionsToggleRequest extends SpeakeasyBase {
    category: PostApiReactionsToggleCategoryEnum;
    reactableId: number;
    reactableType: PostApiReactionsToggleReactableTypeEnum;
}
export declare class PostApiReactionsToggleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
