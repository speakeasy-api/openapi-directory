package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ModifierGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternate_name")
    public String alternateName;
    public ModifierGroup withAlternateName(String alternateName) {
        this.alternateName = alternateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ModifierGroup withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public ModifierGroup withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ModifierGroup withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ModifierGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_allowed")
    public Long maximumAllowed;
    public ModifierGroup withMaximumAllowed(Long maximumAllowed) {
        this.maximumAllowed = maximumAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_required")
    public Long minimumRequired;
    public ModifierGroup withMinimumRequired(Long minimumRequired) {
        this.minimumRequired = minimumRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiers")
    public Object[] modifiers;
    public ModifierGroup withModifiers(Object[] modifiers) {
        this.modifiers = modifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ModifierGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("present_at_all_locations")
    public Boolean presentAtAllLocations;
    public ModifierGroup withPresentAtAllLocations(Boolean presentAtAllLocations) {
        this.presentAtAllLocations = presentAtAllLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_version")
    public String rowVersion;
    public ModifierGroup withRowVersion(String rowVersion) {
        this.rowVersion = rowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_type")
    public ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum selectionType;
    public ModifierGroup withSelectionType(ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum selectionType) {
        this.selectionType = selectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ModifierGroup withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public ModifierGroup withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}