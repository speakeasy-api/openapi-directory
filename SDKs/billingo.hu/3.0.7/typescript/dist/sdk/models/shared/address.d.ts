import { SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";
export declare class Address extends SpeakeasyBase {
    address: string;
    city: string;
    countryCode: CountryEnum;
    postCode: string;
}
