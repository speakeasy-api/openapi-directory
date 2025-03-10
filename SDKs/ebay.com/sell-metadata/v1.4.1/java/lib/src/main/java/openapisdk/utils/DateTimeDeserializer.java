package openapisdk.utils;

import java.io.IOException;
import java.time.OffsetDateTime;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class DateTimeDeserializer extends StdDeserializer<OffsetDateTime> {
    public DateTimeDeserializer() {
        this(null);
    }

    public DateTimeDeserializer(Class<OffsetDateTime> t) {
        super(t);
    }

    @Override
    public OffsetDateTime deserialize(JsonParser parser, DeserializationContext context)
            throws IOException, JsonProcessingException {

        String date = parser.getText();
        try {
            return OffsetDateTime.parse(date);
        } catch (Exception e) {
        }
        return null;
    }
}
