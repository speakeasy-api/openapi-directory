import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CategoriesListResponse extends SpeakeasyBase {
    categories?: shared.Category[];
    contentType: string;
    statusCode: number;
}
