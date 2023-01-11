package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectiveEquipmentSummary
 * <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>
**/
public class ProtectiveEquipmentSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonsIndeterminate")
    public Long[] personsIndeterminate;
    public ProtectiveEquipmentSummary withPersonsIndeterminate(Long[] personsIndeterminate) {
        this.personsIndeterminate = personsIndeterminate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonsWithRequiredEquipment")
    public Long[] personsWithRequiredEquipment;
    public ProtectiveEquipmentSummary withPersonsWithRequiredEquipment(Long[] personsWithRequiredEquipment) {
        this.personsWithRequiredEquipment = personsWithRequiredEquipment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonsWithoutRequiredEquipment")
    public Long[] personsWithoutRequiredEquipment;
    public ProtectiveEquipmentSummary withPersonsWithoutRequiredEquipment(Long[] personsWithoutRequiredEquipment) {
        this.personsWithoutRequiredEquipment = personsWithoutRequiredEquipment;
        return this;
    }
}