import { SpeakeasyBase } from "../../../internal/utils";
export declare class PersonAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class PersonBirth extends SpeakeasyBase {
    date?: number;
    place?: string;
}
export declare enum PersonSexEnum {
    Male = "male",
    Female = "female"
}
export declare enum PersonValidatedEnum {
    True = "true",
    False = "false"
}
export declare class Person extends SpeakeasyBase {
    address?: PersonAddress;
    archivalDate?: string;
    birth?: PersonBirth;
    comment?: string;
    email?: string;
    firstName?: string;
    function?: string[];
    id?: string;
    memberId?: string;
    mobile?: string;
    modificationDate?: string;
    name?: string;
    sex?: PersonSexEnum;
    validated?: PersonValidatedEnum;
}
