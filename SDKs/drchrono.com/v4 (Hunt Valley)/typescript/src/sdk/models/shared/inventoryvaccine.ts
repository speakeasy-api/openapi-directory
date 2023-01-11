import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InventoryVaccineStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    Voided = "voided"
}


export class InventoryVaccine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=current_quantity" })
  currentQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=cvx_code" })
  cvxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lot_number" })
  lotNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer_code" })
  manufacturerCode: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=original_quantity" })
  originalQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=price_with_tax" })
  priceWithTax?: number;

  @SpeakeasyMetadata({ data: "json, name=sales_tax_applicable" })
  salesTaxApplicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InventoryVaccineStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccination_type" })
  vaccinationType?: string;
}
