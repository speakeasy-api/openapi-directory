import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum FilesSortByEnum {
    UpdatedAt = "updated_at",
    Name = "name"
}
export declare class FilesSort extends SpeakeasyBase {
    by?: FilesSortByEnum;
    direction?: SortDirectionEnum;
}
