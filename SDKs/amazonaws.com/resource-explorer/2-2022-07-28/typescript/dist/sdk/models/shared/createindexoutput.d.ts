import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStateEnum } from "./indexstateenum";
/**
 * Success
 */
export declare class CreateIndexOutput extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    state?: IndexStateEnum;
}
