import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostApiReactionsCategoryEnum {
    Like = "like",
    Unicorn = "unicorn",
    ExplodingHead = "exploding_head",
    RaisedHands = "raised_hands",
    Fire = "fire"
}
export declare enum PostApiReactionsReactableTypeEnum {
    Comment = "Comment",
    Article = "Article",
    User = "User"
}
export declare class PostApiReactionsRequest extends SpeakeasyBase {
    category: PostApiReactionsCategoryEnum;
    reactableId: number;
    reactableType: PostApiReactionsReactableTypeEnum;
}
export declare class PostApiReactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
