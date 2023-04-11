import { SpeakeasyBase } from "../../../internal/utils";
export declare class SpaceLogo extends SpeakeasyBase {
    content64Encoded?: string;
    extension?: string;
}
export declare enum SpaceTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
/**
 * A space
 */
export declare class Space extends SpeakeasyBase {
    id?: string;
    logo?: SpaceLogo;
    modificationDate?: string;
    name?: string;
    type?: SpaceTypeEnum;
}
