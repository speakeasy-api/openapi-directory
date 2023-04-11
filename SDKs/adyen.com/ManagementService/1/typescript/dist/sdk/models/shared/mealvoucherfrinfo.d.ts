import { SpeakeasyBase } from "../../../internal/utils";
export declare class MealVoucherFRInfo extends SpeakeasyBase {
    /**
     * Meal Voucher conecsId. Format: digits only
     */
    conecsId: string;
    /**
     * Meal Voucher siret. Format: 14 digits.
     */
    siret: string;
    /**
     * The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**, **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**.
     */
    subTypes: string[];
}
